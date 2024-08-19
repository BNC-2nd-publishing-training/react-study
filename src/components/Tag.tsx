import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import React from 'react';

type TagStatus = 'approved' | 'inProgress' | 'inReview' | 'default';

interface TagStyle {
  backgroundColor: string;
  color: string;
}

const tagStyles: Record<TagStatus, TagStyle> = {
  approved: {
    backgroundColor: theme.color.primary10,
    color: theme.color.primary20,
  },
  inProgress: {
    backgroundColor: theme.color.green10,
    color: theme.color.green30,
  },
  inReview: {
    backgroundColor: theme.color.red10,
    color: theme.color.red30,
  },
  default: {
    backgroundColor: theme.color.gray10,
    color: theme.color.gray60,
  }
};

const TagContainer = styled.div<TagStyle>`
  display: inline-block;
  padding: 7px 11px;
  border-radius: 14px;
  font-size: ${theme.font.textSmall.fontSize};
  font-weight: ${theme.font.textSmall.fontWeight};
  line-height: ${theme.font.textSmall.lineHeight};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;

interface TagProps {
  status?: TagStatus;
  children?: React.ReactNode;
}

const Tag = ({ status = "default", children }: TagProps) => {
  const statusStyle = tagStyles[status];

  return (
    <TagContainer backgroundColor={statusStyle.backgroundColor} color={statusStyle.color}>
      {children}
    </TagContainer>
  );
};

export default Tag;