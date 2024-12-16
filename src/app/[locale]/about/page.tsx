import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  Tag,
  Text,
} from '@/once-ui/components';
import { renderContent } from '@/app/resources/renderContent';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Record<string, string>; // Adjusted to a generic record type
}) {
  const locale = params.locale || 'en'; // Default to 'en' if locale is missing
  const t = await getTranslations(locale);
  const { person, about } = renderContent(t);

  const title = about.title || 'About Us';
  const description = about.description || 'Learn more about us.';
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'localhost';

  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/${locale}/about`,
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

export default function About({
  params,
}: {
  params: Record<string, string>; // Adjusted to a generic record type
}) {
  const locale = params.locale || 'en';
  const t = useTranslations(locale);
  const { person, about, social } = renderContent(t);

  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((e) => e.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((i) => i.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((s) => s.title),
    },
  ];

  return (
    <Flex fillWidth maxWidth="m" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/about`,
            image: `${process.env.NEXT_PUBLIC_BASE_URL}${person.avatar}`,
            sameAs: social
              .filter((s) => s.link && !s.link.startsWith('mailto:'))
              .map((s) => s.link),
            worksFor: {
              '@type': 'Organization',
              name: about.work.experiences[0]?.company || '',
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Flex
          position="fixed"
          paddingLeft="24"
          gap="32"
          direction="column"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Flex>
      )}
      <Flex fillWidth mobileDirection="column" justifyContent="center">
        {about.avatar.display && (
          <Flex
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            direction="column"
            alignItems="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" alignItems="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Flex>
        )}
        <Flex
          className={styles.blockAlign}
          fillWidth
          flex={9}
          maxWidth={40}
          direction="column"
        >
          <Heading variant="display-strong-xl">{person.name}</Heading>
          <Text variant="display-default-xs" onBackground="neutral-weak">
            {person.role}
          </Text>
          <Flex paddingTop="20" paddingBottom="8" gap="8" wrap>
            {social.map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    prefixIcon={item.icon}
                    label={item.name}
                    size="s"
                    variant="tertiary"
                  />
                )
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
