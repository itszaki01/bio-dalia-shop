import { Container } from "@mantine/core";
import AppRouter from "./router/AppRouter";
import { useDevicesContext } from "./context/DevicesContext";

export default function App() {
    const {isTabletAndMobile} = useDevicesContext()
    return (
        <Container size={isTabletAndMobile?'xl':'md'} p={0} pb={60}>
            <AppRouter />
        </Container>
    );
}
