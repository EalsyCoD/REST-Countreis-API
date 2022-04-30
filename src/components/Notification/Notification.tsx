import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../types";

import { Container, Wrapper, Icon, Message } from './styles'
import img from "./icon-error.svg";
const Notification = () => {
    const notification = useSelector((state: RootState) => state.notification);

    if (notification.message === null) {
        return null;
    }

    return (
        <Container
            color={
                notification.status !== null
                    ? notification.status > 300
                        ? "#d32f2f"
                        : "#2e7d32"
                    : ""
            }
        >
            <Wrapper>
                <Icon />
                <Message>{notification.message}</Message>
            </Wrapper>
        </Container>
    );
};

export { Notification };