import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import Checkbox from './Checkbox';
import Tag from './Tag';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ListItemLabel = styled.span`
  margin-left: 10px;
  font-size: ${theme.font.textMedium.fontSize};
  color: ${theme.color.black};
`;

interface ListItemProps {
  label: string;
  checked: boolean;
  onCheck: () => void;
  tagStatus?: 'approved' | 'inProgress' | 'inReview' | 'default';
}

function ListItem({ label, checked, onCheck, tagStatus }: ListItemProps) {
  return (
    <ListItemContainer>
      <CheckboxWrapper>
        <Checkbox checked={checked} onChange={onCheck} />
        <ListItemLabel>{label}</ListItemLabel>
      </CheckboxWrapper>
      <Tag status={tagStatus}>Approved</Tag> {/* Customize tag label as needed */}
    </ListItemContainer>
  );
}

export default ListItem;
