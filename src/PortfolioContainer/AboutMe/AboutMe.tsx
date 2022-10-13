import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";

export default function AboutMe(props : any){
    return (
        <div className='about-me-container screen-container'>
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
            </div>
        </div>
    )
}
