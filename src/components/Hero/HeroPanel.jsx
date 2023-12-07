import './heroPanel.css'
const HeroPanel = () => {
    return (
        <>
            <div className='heroImg'>
                <div className='h-full w-full flex flex-col justify-center px-[4rem]'>
                    <h1 className='text-[#6CB4EE] font-bold text-[5rem] self-start shad'>Mercy's Associates</h1>
                    <h3 className='text-white text-[2rem] font-bold'>Esparciendo el amor de Cristo a través de nuestra caridad</h3>
                    <button className='w-[10rem] py-[6px] bg-[#6CB4EE] rounded-3xl hover:bg-[#81e047]'><a href="/contactenos">Involucrate!</a></button>
                </div>
            </div>
        </>
    );
}

export default HeroPanel;