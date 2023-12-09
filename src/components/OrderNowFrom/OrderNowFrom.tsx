import {
    Badge,
    Blockquote,
    Button,
    CheckIcon,
    Divider,
    Fieldset,
    Flex,
    Radio,
    Select,
    Stack,
    TextInput,
    Title,
} from "@mantine/core";
import React, { CSSProperties, useState } from "react";
import "./OrderNowFrom.scss";
import { IconTruckDelivery } from "@tabler/icons-react";
import { useSetState } from "@mantine/hooks";
import { useDevicesContext } from "../../context/DevicesContext";
type Props = {
    color: string;
    targetRef: React.RefObject<HTMLFormElement>;
    // containerRef: React.RefObject<HTMLFieldSetElement>;
};

export default function OrderNowFrom({ color, targetRef }: Props) {
    const [offer, setOffer] = useState<number>(2);
    const [prices, setPrices] = useSetState({ price: 3900, shipping: 0 });
    const { isTabletAndMobile } = useDevicesContext();

    const handleOfferOneClick = () => {
        setOffer(1);
        setPrices({ price: 2300, shipping: 600 });
    };

    const handleOfferTwoClick = () => {
        setOffer(2);
        setPrices({ price: 3900, shipping: 0 });
    };

    const badgeStyle: CSSProperties = {
        fontSize: isTabletAndMobile ? 14 : 18,
        fontWeight: "bold",
    };
    return (
        <form dir="rtl" className="order-form" ref={targetRef}>
            <Fieldset legend="معلومات الزبون" variant="filled" mx={10} style={{ border: `3px solid ${color}` }} >
                <Stack>
                    <Flex justify="space-evenly">
                        <TextInput size="lg" w={"48%"} placeholder="الإسم" />
                        <TextInput size="lg" w={"48%"} placeholder="رقم الهاتف " />
                    </Flex>
                    <Flex justify="space-evenly">
                        <TextInput size="lg" w={"48%"} placeholder="رقم الهاتف 2" />
                        <Select size="lg" w={"48%"} placeholder="الولاية" />
                    </Flex>
                    <Divider
                        label={
                            <Badge size={"xl"} bg={color}>
                                إختاري العرض
                            </Badge>
                        }
                    />

                    <Radio
                        size="lg"
                        label="علبة واحدة ب 2300 دج + 600 دج توصيل"
                        name="check"
                        icon={CheckIcon}
                        color={color}
                        onClick={handleOfferOneClick}
                    />
                    <Radio
                        size="lg"
                        defaultChecked
                        label={
                            <>
                                {" 2 علب ب 3900 دج + توصيل مجاني "}
                                
                                <Badge size="lg" bg={"red"} style={badgeStyle}>
                                    أفضل عرض 
                                </Badge>{" "}
                            </>
                        }
                        name="check"
                        icon={CheckIcon}
                        color={color}
                        onClick={handleOfferTwoClick}
                    />

                    <Blockquote color={color} icon={<IconTruckDelivery />} mt="xl" mx={"md"} radius={5} py={10}>
                        <Title order={3}>
                            السعر:{" "}
                            <Badge size="lg" bg={color} style={badgeStyle}>
                                {`${prices.price} دج`}
                            </Badge>
                        </Title>
                        <Title order={3} display={"block"}>
                         التوصيل:{" "}
                            <Badge size="lg" bg={"green"} style={badgeStyle}>
                                {offer == 2 ? "مجاني" : `600 دج`}
                            </Badge>
                        </Title>
                        <Divider m={5} />
                        <Title order={3}>
                            الإجمالي:{" "}
                            <Badge size="lg" bg={"yellow"} style={badgeStyle}>
                                {prices.price + prices.shipping} دج
                            </Badge>
                        </Title>
                    </Blockquote>
                </Stack>
                <Button bg={color} my={15} fullWidth size="lg" className="animation">
                    تأكيد وإرسال الطلب
                </Button>
            </Fieldset>
        </form>
    );
}
