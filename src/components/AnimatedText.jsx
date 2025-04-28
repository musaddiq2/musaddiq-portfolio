import Typed from 'react-typed';

const AnimatedText = ({ strings }) => (
  <Typed
    strings={strings}
    typeSpeed={50}
    backSpeed={30}
    loop
    className="text-4xl md:text-6xl font-bold text-cyan-400"
  />
);

export default AnimatedText;