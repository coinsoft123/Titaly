import AppHeader from '../component/AppHeader';
import AppNav from '../component/AppNav';
import LeftSlider from '../component/LeftSlider';
import SectionArea from '../component/SectionArea';
import '../stylesheet/style.css';

function HomePage(){
    return(
        <div className="m-0 p-0 h-lvh w-full flex flex-col">
            <div className="AppHeaderBar m-0 p-1 h-10 w-full bg-fuchsia-100 border-b-2 border-x-neutral-600">
                <AppHeader></AppHeader>
            </div>
            <div className="SectionArea m-0 p-0 flex flex-row">
                
                    <div className="ApplistNav m-0 p-1 h-full w-14 bg-fuchsia-100 border-r-2  ">
                        <AppNav></AppNav>
                    </div>
                    <div className="AppSection m-0 p-0 h-full w-full ">
                        <div className="AppArea m-0 p-0 h-full w-full flex flex-row">
                    
                            <div className="LeftSlider m-0 p-0 h-full w-1/4 bg-fuchsia-100 bg-opacity-30 border-r-2 ">
                            <LeftSlider></LeftSlider>

                            </div>
                            <div className="WorkArea m-0 p-0 h-full w-full bg-fuchsia-50 bg-opacity-5">
                                <div className="WorkSection m-0 p-0 h-full w-full flex flex-col">
                        
                                    <SectionArea></SectionArea>
            

                                </div>
                                    

                            </div>

                

                        </div>

                    </div>

                

            </div>

        </div>
    )
}
export default HomePage;