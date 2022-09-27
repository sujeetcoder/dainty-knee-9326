import { Button, Image, Input ,Text} from "@chakra-ui/react"
import homeTop from "../img/homeTop.png"



const Home = ()=>{

    

    return <div>
        <div>
        <Image w={"100%"} height="630px" src={homeTop} alt="home"></Image>
        <Input style={{ position:"relative",top:"-290px",left:"930px",border:"none",backgroundColor:"white" }} w="190px" placeholder='you@gmail.com' size='md' />
        <Input style={{ position:"relative",top:"-290px",left:"935px",border:"none",backgroundColor:"white" }} w="190px" placeholder='0000' size='md' />
        <Button style={{ position:"relative",top:"-230px",left:"555px",border:"none",backgroundColor:"white",width:"130px",background:"#3167ff" }}  > Get Started </Button>        
        </div>
        <Text fontSize={"5xl"} fontWeight="semibold" textAlign="center" >How it Works</Text>

        <div>

        </div>
    </div>
}

export default Home