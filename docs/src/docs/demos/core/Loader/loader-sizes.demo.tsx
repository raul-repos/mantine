import React from 'react';
import { Loader, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl']
    .reverse()
    .map((size) => <Loader key={size} size={size} data-mantine-composable {...props} />);

export function LoaderSizesDemo() {
  return (
    <CodeDemo>
      <Group>{getSizes()}</Group>
    </CodeDemo>
  );
}
