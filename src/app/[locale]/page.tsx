import React from 'react';
import {
    Heading,
    Flex,
    Text,
    Button,
    Avatar,
    RevealFx,
    Arrow,
} from '@/once-ui/components';
import type { Metadata } from 'next';

import { Projects } from '@/components/work/Projects';
import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
    params,
}: {
    params: { locale: string };
}): Promise<Metadata> {
    const t = await getTranslations(params.locale); // Properly fetch translations
    const { home = {} } = renderContent(t) || {}; // Safely handle missing content
    const title = home.title || 'Default Home Title';
    const description = home.description || 'Default Home Description';
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${params.locale}`,
            images: [{ url: ogImage, alt: title }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default async function Home({
    params,
}: {
    params: { locale: string };
}) {
    const t = await getTranslations(params.locale);
    const { home = {}, about = {}, person = {}, newsletter = {} } =
        renderContent(t) || {}; // Safely handle potential undefined values

    return (
        <Flex
            maxWidth="m"
            fillWidth
            gap="xl"
            direction="column"
            alignItems="center"
        >
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: home.title || 'Default Home Title',
                        description:
                            home.description || 'Default Home Description',
                        url: `https://${baseURL}`,
                        image: `${baseURL}/og?title=${encodeURIComponent(
                            home.title || 'Default Home Title'
                        )}`,
                        publisher: {
                            '@type': 'Person',
                            name: person.name || 'Default Name',
                            image: {
                                '@type': 'ImageObject',
                                url: `${baseURL}${person.avatar || '/default-avatar.jpg'}`,
                            },
                        },
                    }),
                }}
            />
            <Flex fillWidth direction="column" paddingY="l" gap="m">
                <Flex direction="column" fillWidth maxWidth="m" gap="m">
                    <RevealFx translateY="4">
                        <Heading wrap="balance" variant="display-strong-l">
                            {home.headline || 'Welcome to Our Website'}
                        </Heading>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2}>
                        <Flex fillWidth>
                            <Text
                                wrap="balance"
                                onBackground="neutral-weak"
                                variant="heading-default-xl"
                            >
                                {home.subline || 'Explore our latest updates.'}
                            </Text>
                        </Flex>
                    </RevealFx>
                    <RevealFx translateY="12" delay={0.4}>
                        <Flex fillWidth>
                            <Button
                                id="about"
                                data-border="rounded"
                                href={`/${params.locale}/about`}
                                variant="tertiary"
                                size="m"
                            >
                                <Flex gap="8" alignItems="center">
                                    {about.avatar?.display && (
                                        <Avatar
                                            style={{
                                                marginLeft: '-0.75rem',
                                                marginRight: '0.25rem',
                                            }}
                                            src={person.avatar || '/default-avatar.jpg'}
                                            size="m"
                                        />
                                    )}
                                    {t('about.title') || 'About Us'}
                                    <Arrow trigger="#about" />
                                </Flex>
                            </Button>
                        </Flex>
                    </RevealFx>
                </Flex>
            </Flex>
            <RevealFx translateY="16" delay={0.6}>
                <Projects range={[1, 1]} locale={params.locale} />
            </RevealFx>
            {routes['/blog'] && (
                <Flex fillWidth gap="24" mobileDirection="column">
                    <Flex flex={1} paddingLeft="l">
                        <Heading as="h2" variant="display-strong-xs" wrap="balance">
                            Latest from the blog
                        </Heading>
                    </Flex>
                    <Flex flex={3} paddingX="20">
                        <Posts range={[1, 2]} columns="2" locale={params.locale} />
                    </Flex>
                </Flex>
            )}
            <Projects range={[2, 3]} locale={params.locale} />
            {newsletter.display && <Mailchimp newsletter={newsletter} />}
        </Flex>
    );
}
