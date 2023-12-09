import { AppShell, Image, Stack } from "@mantine/core";
import{ useState } from "react";
import OrderNowBtn from "../../components/OrderNowBtn";
import ImgOne from "../../assets/images/romoch/1.png";
import ImgTwo from "../../assets/images/romoch/2.png";
import ImgThree from "../../assets/images/romoch/3.png";
import ImgFour from "../../assets/images/romoch/4.png";
import ImgFive from "../../assets/images/romoch/5.png";
import OrderNowFrom from "../../components/OrderNowFrom/OrderNowFrom";
import { useScrollIntoView } from "@mantine/hooks";
export default function Romoch() {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLFormElement>({
        offset: 60,
    });

    const [hideBtn, setHideBtn] = useState(false);


    onscroll = () => {
        console.log(scrollY)
        if (scrollY >= 7462) {
            setHideBtn(true);
        } else {
            setHideBtn(false);
        }
    };
    return (
        <Stack >
            <Image src={ImgOne} loading="lazy" />
            <Image src={ImgTwo} loading="lazy" />
            <Image src={ImgThree} loading="lazy" />
            <Image src={ImgFour} loading="lazy" />
            <Image src={ImgFive} loading="lazy" />
            <OrderNowFrom color="#f16a8e" targetRef={targetRef} />

            <AppShell footer={{ height: 60 }} hidden={hideBtn}>
                <AppShell.Footer>
                    <OrderNowBtn btnText="أطلبي الآن" color="#f16a8e" handleClick={scrollIntoView} />
                </AppShell.Footer>
            </AppShell>
        </Stack>
    );
}
