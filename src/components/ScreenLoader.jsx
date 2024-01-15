import { Oval } from "react-loader-spinner"

const ScreenLoader = () => {
    return <div className="w-screen h-screen fixed bg-black bg-opacity-50 grid place-items-center top-0 left-0 z-30">
        <Oval color="white" secondaryColor="black"/>
    </div>
}

export default ScreenLoader