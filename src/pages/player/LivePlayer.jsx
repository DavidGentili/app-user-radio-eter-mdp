import PageTransition from '@components/PageTransition';
import LiveStreamVideo from '@components/livePlayer/LiveStreamVideo';

const LivePlayer = () => {
    return (
        <PageTransition className='livePlayerPage'>
            <div className='livePlayerPage__background'></div>
            <LiveStreamVideo />
        </PageTransition>
    )
}

export default LivePlayer
