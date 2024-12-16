"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button, Flex, Heading, Text } from "@/once-ui/components";

export default function AdminLogin() {
  const { data: session, status, error } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "authenticated" && pathname !== "/admin/dashboard") {
      router.push("/admin/dashboard");
    }
  }, [status, pathname, router]);

  if (status === "loading") {
    return (
      <Flex direction="column" alignItems="center" justifyContent="center" fillHeight>
        <Text aria-live="polite">Checking authentication...</Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex direction="column" alignItems="center" justifyContent="center" fillHeight>
        <Heading variant="display-strong-l" marginBottom="l">
          Authentication Error
        </Heading>
        <Text color="red" marginBottom="m">
          An error occurred: {error.message}
        </Text>
        <Button onClick={() => signIn("google")}>Try Again</Button>
      </Flex>
    );
  }

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" fillHeight>
      <Heading variant="display-strong-l" marginBottom="l">
        Admin Login
      </Heading>
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
      <Text marginTop="m" textAlign="center">
        Log in with your Google account to access the admin dashboard.
      </Text>
    </Flex>
  );
}
