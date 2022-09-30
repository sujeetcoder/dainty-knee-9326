import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, ControlBox, Divider, Flex, Select, Spacer, Text } from "@chakra-ui/react"



const CommonQ = ()=> {

    function showIt(e){
        let content = e.target.nextElementSibling
        if(content.style.display=="block"){
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
        
    }




    return (
        <Box margin="auto" w="80%" textAlign="center" >
            <br/>
            <br/>
            <br/>
            <Text fontSize={["xl","2xl","5xl"]} > <b> Common Questions </b></Text>
            <Box w="75%" m="auto" textAlign="start" lineHeight="30px" >
        {/* menu */}
        
            <p style={{marginTop:"30px",fontWeight:"bold"}} onClick={showIt} >  I’m a new customer. How do I redeem my gift card? </p>
            
            <p  style={{ display:"none",overflow:"hidden",marginTop:"10px" }} >
            Redeem your Gift Card online at freshly.com/gifts. When redeemed and if the order amount is greater than the amount on your gift card, your provided payment method will be charged for the difference. If the gift card balance exceeds the amount of your order, your remaining gift card balance will be converted to stored credit and automatically applied to future orders. If your order amount and gift card have equal value, then the full gift card balance will be used on the order. By using this card, you agree to these Terms & Conditions and Freshly reserves the right to modify, replace, or suspend gift cards at any time. This Gift Card does not expire and is not reloadable. No replacement if lost or stolen. Not valid on prior purchases, refer a friend programs, applicable taxes, shipping fees or redeemable for cash or cash equivalents.
            </p>
       
        {/* menu */}
             <Divider />
             <p style={{marginTop:"30px",fontWeight:"bold"}} onClick={showIt} >I’m a current customer. How do I redeem my gift card?</p>
            <p  style={{ display:"none",overflow:"hidden" }} >
            Redeem your Gift Card online in your Account Settings by logging into your Freshly account at freshly.com or in the Freshly app. When redeemed and if the order amount is greater than the amount on your gift card, your provided payment method will be charged for the difference. If the gift card balance exceeds the amount of your order, your remaining gift card balance will be converted to stored credit and automatically applied to future orders. If your order amount and gift card have equal value, then the full gift card balance will be used on the order. By using this card, you agree to these Terms & Conditions and Freshly reserves the right to modify, replace, or suspend gift cards at any time. This Gift Card does not expire and is not reloadable. No replacement if lost or stolen. Not valid on prior purchases, refer a friend programs, applicable taxes, shipping fees or redeemable for cash or cash equivalents.
            </p>
            <Divider />
            <p style={{marginTop:"30px",fontWeight:"bold"}} onClick={showIt} >How do I purchase a gift card?</p>
            <p  style={{ display:"none",overflow:"hidden" }} >
            Click “Buy Gift Card” and follow the instructions to purchase.
            </p>
            <Divider />
            <p style={{marginTop:"30px",fontWeight:"bold"}} onClick={showIt} >Can I purchase more than one gift card?</p>
            <p  style={{ display:"none",overflow:"hidden" }} >
            Yes! You can purchase up to 10 gift cards per order. Please note: the maximum gift card value for one (1) gift card is $500, and the maximum value for all gift cards in your shopping cart is $5,000.
            </p>
            <Divider />
            <p style={{marginTop:"30px",fontWeight:"bold"}} onClick={showIt} >Do I need a Freshly subscription to purchase a gift card?</p>
            <p  style={{ display:"none",overflow:"hidden" }} >
            No, you do not need to have a Freshly subscription in order to purchase a gift card.
            </p>
            <Divider />
            <p style={{marginTop:"30px",fontWeight:"bold"}} onClick={showIt} >Does the recipient of the gift card need a Freshly subscription to redeem their gift?</p>
            <p  style={{ display:"none",overflow:"hidden" }} >
            No, your gift card’s recipient does not need to have a Freshly subscription in order to redeem. Upon redeeming their gift card, they’ll be prompted to create an account, which will jump start their subscription.
            </p>
            </Box>
        </Box>
    )
}


export default CommonQ;