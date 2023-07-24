import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { Space } from 'antd';
import ProjectCard from '../../../components/shared/ProjectCard';
import Text from '../../../components/shared/Text';

function OverviewInfoCard() {
  const { sm } = useBreakpoint();

  return (
    <Space direction="vertical" size={sm ? 'large' : 'small'} align="center">
      <ProjectCard
        title="Curious about my coding skills?"
        children={
          <Space direction="vertical" size="middle">
            <Text children="In this section, I would like to present a few projects to you." />
            <Text
              children="Some of them are older and are the result of my learning process
              from when I was working on becoming a front-end developer."
            />
            <Text
              children="The others are newer, created this year. I utilized the skills and
              technologies developed and learned over the last 3 years while
              working as a front-end developer."
            />
            <Text
              children="To explore the projects, please go to the Menu, navigate to the
              Projects submenu, and choose which project you would like to view."
            />
          </Space>
        }
      />
    </Space>
  );
}

export default OverviewInfoCard;
