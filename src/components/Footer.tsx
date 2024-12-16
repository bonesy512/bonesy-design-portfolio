import { renderContent } from "@/app/resources";
import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { useTranslations } from "next-intl";
import styles from './Footer.module.scss';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Get translations
    const t = useTranslations();

    // Pass translations (t) to renderContent
    const { person = {}, social = [] } = renderContent(t);

    return (
        <Flex
            as="footer"
            position="relative"
            fillWidth
            padding="8"
            justifyContent="center"
            mobileDirection="column"
        >
            <Flex
                className={styles.mobile}
                fillWidth
                maxWidth="m"
                paddingY="8"
                paddingX="16"
                gap="16"
                justifyContent="space-between"
                alignItems="center"
            >
                <Text
                    variant="body-default-s"
                    onBackground="neutral-strong"
                >
                    <Text onBackground="neutral-weak">
                        © {currentYear} /
                    </Text>
                    <Text paddingX="4">
                        {person.name || "Unknown"} {/* Fallback if person.name is undefined */}
                    </Text>
                    <Text onBackground="neutral-weak">
                        / <SmartLink style={{ marginLeft: '-0.125rem' }} href="https://bonesydesign.com">Bonesy Design</SmartLink>
                    </Text>
                </Text>
                <Flex gap="16">
                    {social.map((item) =>
                        item.link && (
                            <IconButton
                                key={item.name}
                                href={item.link}
                                icon={item.icon}
                                tooltip={item.name}
                                size="s"
                                variant="ghost"
                            />
                        )
                    )}
                </Flex>
            </Flex>
            <Flex height="80" show="s"></Flex>
        </Flex>
    );
};
