import React from 'react';
import TagLayout from '@/layouts/tag.layout';
import { TagProps } from '@/utils/interfaces/tag.types';

const Tag: React.FC<TagProps> = (props) => {
    return <TagLayout {...props} />;
};

export default Tag;
