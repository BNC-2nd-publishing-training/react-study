import styled from "@emotion/styled";
import { theme } from "@/styles/theme";
import 'bootstrap-icons/font/bootstrap-icons.css';

import CreateTaskModal from "@/components/Modal/CreateTaskModal";
import TypeTab from "@/components/Tab/TypeTab";
 
function Main() {

    return (
        <Container>
            <TaskContainer>
                <CreateTaskModal />
                <TypeTab />

                {/* <TaskBody>
                    <TaskCounter>10</TaskCounter>
                    <TabContainer>
                        <Tabs>
                            <TabPanel label="All">
                                <Checkbox name="Option 1" value="value1" />
                                <Checkbox name="Option 2" value="value2" />
                            </TabPanel>
                            <TabPanel label="In Review">
                                <p>In Review Task</p>
                            </TabPanel>
                            <TabPanel label="In Progress">
                                <p>In Progress Task</p>
                            </TabPanel>
                            <TabPanel label="Waiting">
                                <p>Waiting Task</p>
                            </TabPanel>
                        </Tabs>
                    </TabContainer>
                </TaskBody> */}
            </TaskContainer>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${theme.color.gray30};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TaskContainer = styled.div`
    background-color: ${theme.color.white};
    width: 517px;
    height: 840px;
    border-radius: 10px;
`;

export default Main;