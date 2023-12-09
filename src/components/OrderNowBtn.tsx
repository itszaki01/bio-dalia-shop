import { Button, Center } from "@mantine/core";
import React from "react";
import "./OrderNowBtn.scss";
import { useDevicesContext } from "../context/DevicesContext";
type Props = {
    btnText: string;
    color?: string;
    handleClick: () => void;
};
export default function OrderNowBtn({ btnText, color, handleClick }: Props) {
    const { isTabletAndMobile } = useDevicesContext();
    return (
        <Center h={"100%"}>
            <Button
                w={isTabletAndMobile ? "80%" : 300}
                size={"lg"}
                bg={color || "red"}
                className="animation"
                onClick={() =>
                    handleClick()
                }
            >
                {btnText || "اطلب الآن"}
            </Button>
        </Center>
    );
}
