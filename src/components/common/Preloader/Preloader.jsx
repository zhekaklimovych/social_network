import preloader from '../../assets/img/preloader.gif'

const Preloader = ()=> {
    return <div style={{backgroundColor: "white"}}>
        <img src={preloader} alt={'preloader'}/>
    </div>
}

export default Preloader;