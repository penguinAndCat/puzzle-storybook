import Palette from 'components/common/Palette';
import { theme } from 'libs/theme/theme';
import { Dispatch, MouseEvent, SetStateAction, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  puzzleImg: img;
  showLevel: boolean;
  setShowLevel: Dispatch<SetStateAction<boolean>>;
  setShowLvMenu: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ puzzleImg, showLevel, setShowLevel, setShowLvMenu }: Props) => {
  const onClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.stopPropagation();
    if (!showLevel) {
      setShowLvMenu(true);
    } else {
      setShowLevel(false);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Button onClick={(e) => onClick(e)}>퍼즐수</Button>
        </Left>
        <Logo>
          <div>PENGCAT</div>
          <div>PUZZLE</div>
        </Logo>
        <Right>
          <Button>완성본</Button>
          <Palette />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.headerColor};
  border-bottom: solid 3px ${({ theme }) => theme.headerTextColor};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  min-width: 130px;
  display: flex;
  margin-right: 80px;
  @media (max-width: 900px) {
    margin-right: 20px;
  }
  @media (max-width: 600px) {
    margin: 0;
  }
`;

const Right = styled.div`
  min-width: 130px;
  ${theme.common.flexCenter};
  margin-left: 80px;
  @media (max-width: 900px) {
    margin-left: 20px;
  }
  @media (max-width: 600px) {
    margin: 0;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 4px;
  border: 3px ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.headerTextColor};
  background-color: ${({ theme }) => theme.headerColor};
  font-weight: 600;
  text-align: center;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin: 0 80px;
  font-weight: 600;
  color: ${({ theme }) => theme.headerTextColor};
  cursor: pointer;
  @media (max-width: 900px) {
    margin: 0 20px;
  }
  @media (max-width: 600px) {
    margin: 0;
  }
`;
