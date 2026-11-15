import { Box, Group, Pagination, Text } from '@mantine/core';

import { t } from '../texts/t.js';

interface ListPaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}

const controlLabels = {
  first: 'list.first',
  previous: 'list.previous',
  next: 'list.next',
  last: 'list.last',
} as const;

export const ListPagination = ({
  page,
  pageSize,
  total,
  onChange,
}: ListPaginationProps) => {
  if (total === 0) {
    return null;
  }

  const pages = Math.ceil(total / pageSize);
  const shown = Math.min(page, pages);
  const from = (shown - 1) * pageSize + 1;
  const to = Math.min(shown * pageSize, total);

  return (
    <Group
      justify="space-between"
      gap="xs"
      style={{
        flexShrink: 0,
      }}
    >
      <Text ff="monospace" fz={12} c="gray.6">
        {t('list.range', {
          from,
          to,
          total,
        })}
      </Text>
      <Box component="nav" aria-label={t('list.pages')}>
        <Pagination
          value={shown}
          onChange={onChange}
          total={pages}
          siblings={1}
          size="xs"
          radius={4}
          gap={4}
          getItemProps={(item) => ({
            'aria-label': t('list.page', {
              page: item,
            }),
          })}
          getControlProps={(control) => ({
            'aria-label': t(controlLabels[control]),
          })}
        />
      </Box>
    </Group>
  );
};
