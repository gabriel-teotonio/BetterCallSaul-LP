
const testiVideos = document.querySelector('.testimunials-videos')
const modalVideo = document.querySelector('.modal-video')
const modalVideoContent = document.querySelector('.modal-videoContent')


function closeModal (e){
    if(e.target.classList !== 'modal-video'){
        modalVideo.style.display = 'none'
        modalVideoContent.innerHTML = ''
    }
}

function targetIframe (name){
    let iframeVideo = ''
    switch (name) {
        case "carl":
            iframeVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/nDc-LNW8z18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break
        case "wendy":
            iframeVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/P-nhEHXQcTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break
        case "badger":
            iframeVideo = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Db-RFNJDO3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            break;
        default:
            break;
    }
    return iframeVideo
}

function openModalVideo (e){
    const name = e.target.dataset.name
    let iframe = ''
    
    if(e.target.classList.contains('play-btn')){
        iframe = targetIframe(name)
        modalVideo.style.display = 'block'
        modalVideoContent.innerHTML = iframe
    }
}



testiVideos.addEventListener('click', openModalVideo)
modalVideo.addEventListener('click', closeModal)