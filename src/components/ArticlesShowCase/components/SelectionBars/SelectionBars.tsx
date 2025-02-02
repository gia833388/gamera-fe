import styled from 'styled-components';
import PlatformBars from './components/PlatformBars';
import SortBars from '../../../Shares/SortBars';
import { EArticleType } from '@/constants/article';

const Container = styled.div`
  // border: 1px solid #fff;

  margin-top: 45px;

  display: flex;
  justify-content: space-between;
`;

type SelectionBarsProps = {
  articleType: string;
  platformSelected: string;
  setPlatformSelected: React.Dispatch<React.SetStateAction<string>>;
};

// this component represents the platform selection and sorting buttons under the tilte of 'All Reviews'
const SelectionBars = ({
  articleType,
  platformSelected,
  setPlatformSelected,
}: SelectionBarsProps) => {
  return (
    <Container>
      <PlatformBars
        platformSelected={platformSelected}
        setPlatformSelected={setPlatformSelected}
      />
      {/* SortBars are only visible on Review page */}
      {articleType === EArticleType.REVIEW ? <SortBars /> : null}
    </Container>
  );
};

export default SelectionBars;
