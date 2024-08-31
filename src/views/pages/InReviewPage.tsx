import React from 'react';
import Tag from '@/components/tags';
import { TagType } from '@/utils/interfaces/tag.types';
import styles from '@/styles/TodoAdd/TodoAdd.module.css';
import Checkbox from '@/components/checkbox';

interface InReviewPageProps {
  tasks: { id: number; title: string; status: TagType }[];
  checkedStates: { [id: number]: boolean };
  onCheckboxChange: (id: number, checked: boolean) => void;
}

const InReviewPage: React.FC<InReviewPageProps> = ({ tasks, checkedStates, onCheckboxChange }) => {
  return (
    <div style={{ padding: '20px' }}>
      {tasks.map(task => (
        <div key={task.id} className={styles.list}>
          <div className={styles.checkbox}>
            <Checkbox
              checked={checkedStates[task.id] || false}
              onChange={(checked) => onCheckboxChange(task.id, checked)}
            />
          </div>
          <span>{task.title}</span>
          <div className={styles.tag}>
            <Tag type={task.status} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InReviewPage;
