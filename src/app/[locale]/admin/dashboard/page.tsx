"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Flex, Heading, Button, Text, Feedback } from "@/once-ui/components"; // Ensure Feedback is imported correctly
import { renderContent } from "@/app/resources/renderContent";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const content = renderContent();
  const admin = content?.admin;

  if (status === "loading") return <Text>Loading...</Text>;
  if (!session) {
    router.push("/admin");
    return null;
  }

  if (!admin) {
    return <Text>Error: Admin content is missing or undefined.</Text>;
  }

  const handleClose = (index: number) => {
    console.log(`Feedback section ${index} closed.`);
  };

  return (
    <Flex direction="column" padding="l" gap="l">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading variant="display-strong-l">{admin.title}</Heading>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </Flex>
      <Text>{admin.description}</Text>
      <Flex direction="column" gap="m">
        {admin.sections.map((section, index) => (
          <Feedback
          key={index}
          variant={index % 2 === 0 ? "success" : "info"} // Alternate variants
          icon={index === 0} // Only show icon for the first section
          title={section.title}
          description={section.description}
          onClose={() => handleClose(index)}
          />
        ))}
      </Flex>
    </Flex>
  );
}
