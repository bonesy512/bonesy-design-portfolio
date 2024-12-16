"use client";

import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/routing";
import { routes, protectedRoutes } from "@/app/resources";
import { Flex, Spinner, Input, Button, Heading } from "@/once-ui/components";

interface RouteGuardProps {
    children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
    const pathname = usePathname();
    const [isRouteEnabled, setIsRouteEnabled] = useState(false);
    const [isPasswordRequired, setIsPasswordRequired] = useState(false);
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<string | undefined>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const performChecks = async () => {
            setLoading(true);
            setError(undefined);

            try {
                // Check if the route is enabled
                const checkRouteEnabled = () => {
                    if (!pathname) return false;

                    // Check direct route
                    if (routes[pathname as keyof typeof routes]) {
                        return true;
                    }

                    // Check dynamic routes
                    const dynamicRoutes = ["/blog", "/work"] as const;
                    return dynamicRoutes.some(
                        (route) => pathname.startsWith(route) && routes[route]
                    );
                };

                const routeEnabled = checkRouteEnabled();
                setIsRouteEnabled(routeEnabled);

                if (routeEnabled && protectedRoutes[pathname as keyof typeof protectedRoutes]) {
                    setIsPasswordRequired(true);

                    // Check authentication status
                    const response = await fetch("/api/check-auth");
                    setIsAuthenticated(response.ok);
                }
            } catch (error) {
                console.error("Error performing route checks:", error);
            } finally {
                setLoading(false);
            }
        };

        performChecks();
    }, [pathname]);

    const handlePasswordSubmit = async () => {
        try {
            const response = await fetch("/api/authenticate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (response.ok) {
                setIsAuthenticated(true);
                setError(undefined);
            } else {
                setError("Incorrect password");
            }
        } catch (error) {
            console.error("Error authenticating password:", error);
            setError("An error occurred. Please try again.");
        }
    };

    if (loading) {
        return (
            <Flex fillWidth paddingY="128" justifyContent="center">
                <Spinner />
            </Flex>
        );
    }

    if (!isRouteEnabled) {
        return (
            <Flex fillWidth paddingY="128" justifyContent="center">
                <Heading align="center">404 - Page Not Found</Heading>
            </Flex>
        );
    }

    if (isPasswordRequired && !isAuthenticated) {
        return (
            <Flex
                fillWidth
                paddingY="128"
                maxWidth={24}
                gap="24"
                justifyContent="center"
                direction="column"
                alignItems="center"
            >
                <Heading align="center" wrap="balance">
                    This page is password protected
                </Heading>
                <Input
                    id="password"
                    type="password"
                    label="Enter password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (error) setError(undefined);
                    }}
                    error={error}
                />
                <Button onClick={handlePasswordSubmit} size="l">
                    Submit
                </Button>
            </Flex>
        );
    }

    return <>{children}</>;
};

export { RouteGuard };
