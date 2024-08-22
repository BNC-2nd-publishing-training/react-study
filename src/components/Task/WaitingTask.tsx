import styled from "@emotion/styled";

function WaitingTask() {
    return (
        <Container>
            <Title>Upcoming Tasks</Title>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
`;

const Title = styled.div`
    position: fixed;
    top: 58%;
    left: 39%;
    font-size: 23px;
    color: gray;
`;

export default WaitingTask;
