import ScrollSpy from "react-ui-scrollspy";
import  Navigation from '../components/Navigation';



const Demo1 = (props) => {
  return (
    <>
      <Navigation />
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <div id="orange" backgroundColor={"orange"}>
          <h1>Orange</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ex eget convallis laoreet, nunc massa scelerisque ex, sit amet facilisis est massa eu purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat ex ut dolor cursus viverra. Etiam et nisl sodales, interdum mauris id, venenatis urna. Aliquam dictum mattis tellus, vel pellentesque nisi pretium id. Proin pretium elit sed tempus vestibulum. Ut ultricies congue sapien nec tincidunt. Integer molestie nisi velit, convallis blandit nisl porttitor in. Donec venenatis dui nec augue vehicula, a gravida ipsum vestibulum. Nulla dignissim, risus quis consectetur semper, sem risus malesuada urna, vitae suscipit enim massa eget nunc. Donec ac velit cursus, euismod risus vitae, dictum ante. Morbi id orci vitae lectus fermentum fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam luctus risus ut tellus efficitur, vitae condimentum massa pellentesque.

Morbi pharetra sed velit ac placerat. Integer auctor magna ut quam suscipit efficitur. Phasellus porttitor eget magna id imperdiet. Quisque pharetra erat eget augue varius commodo. Quisque viverra vehicula neque in malesuada. Phasellus ipsum metus, aliquam vel iaculis eget, blandit at sem. Integer tincidunt tellus sed ex varius mattis. Curabitur arcu odio, posuere quis consequat ut, dignissim vel diam. Integer egestas dolor at facilisis maximus. Vivamus et arcu in nisi egestas volutpat id sit amet augue. Nullam libero ipsum, condimentum et pulvinar et, egestas id purus. Aliquam auctor lacinia risus, in blandit orci luctus in. Vivamus vestibulum egestas erat, vel cursus lacus eleifend ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Nunc vulputate leo volutpat, blandit felis in, tincidunt tellus. Nulla eget leo accumsan, porta tortor at, varius nunc. Phasellus et nisl sed dolor aliquam condimentum. Donec sodales augue nec arcu fermentum cursus. Nam euismod, nisl ut consequat venenatis, nisi risus ullamcorper dolor, eget gravida metus velit eu eros. Nulla sodales malesuada risus. Donec a augue eu orci lobortis fringilla. Integer mattis ante sed finibus tempus. Proin nunc erat, commodo vitae quam sit amet, pretium dapibus nisl. Sed blandit quam ante, sit amet scelerisque ex consectetur id. Proin blandit nunc accumsan, fermentum purus a, pharetra tortor. </p>
        </div>
        <div id="brown" backgroundColor={"brown"}>
          <h1>Brown</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ex eget convallis laoreet, nunc massa scelerisque ex, sit amet facilisis est massa eu purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat ex ut dolor cursus viverra. Etiam et nisl sodales, interdum mauris id, venenatis urna. Aliquam dictum mattis tellus, vel pellentesque nisi pretium id. Proin pretium elit sed tempus vestibulum. Ut ultricies congue sapien nec tincidunt. Integer molestie nisi velit, convallis blandit nisl porttitor in. Donec venenatis dui nec augue vehicula, a gravida ipsum vestibulum. Nulla dignissim, risus quis consectetur semper, sem risus malesuada urna, vitae suscipit enim massa eget nunc. Donec ac velit cursus, euismod risus vitae, dictum ante. Morbi id orci vitae lectus fermentum fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam luctus risus ut tellus efficitur, vitae condimentum massa pellentesque.

Morbi pharetra sed velit ac placerat. Integer auctor magna ut quam suscipit efficitur. Phasellus porttitor eget magna id imperdiet. Quisque pharetra erat eget augue varius commodo. Quisque viverra vehicula neque in malesuada. Phasellus ipsum metus, aliquam vel iaculis eget, blandit at sem. Integer tincidunt tellus sed ex varius mattis. Curabitur arcu odio, posuere quis consequat ut, dignissim vel diam. Integer egestas dolor at facilisis maximus. Vivamus et arcu in nisi egestas volutpat id sit amet augue. Nullam libero ipsum, condimentum et pulvinar et, egestas id purus. Aliquam auctor lacinia risus, in blandit orci luctus in. Vivamus vestibulum egestas erat, vel cursus lacus eleifend ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Nunc vulputate leo volutpat, blandit felis in, tincidunt tellus. Nulla eget leo accumsan, porta tortor at, varius nunc. Phasellus et nisl sed dolor aliquam condimentum. Donec sodales augue nec arcu fermentum cursus. Nam euismod, nisl ut consequat venenatis, nisi risus ullamcorper dolor, eget gravida metus velit eu eros. Nulla sodales malesuada risus. Donec a augue eu orci lobortis fringilla. Integer mattis ante sed finibus tempus. Proin nunc erat, commodo vitae quam sit amet, pretium dapibus nisl. Sed blandit quam ante, sit amet scelerisque ex consectetur id. Proin blandit nunc accumsan, fermentum purus a, pharetra tortor. </p>
        </div>
        <div id="blue" backgroundColor={"blue"}>
          <h1>Blue</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ex eget convallis laoreet, nunc massa scelerisque ex, sit amet facilisis est massa eu purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat ex ut dolor cursus viverra. Etiam et nisl sodales, interdum mauris id, venenatis urna. Aliquam dictum mattis tellus, vel pellentesque nisi pretium id. Proin pretium elit sed tempus vestibulum. Ut ultricies congue sapien nec tincidunt. Integer molestie nisi velit, convallis blandit nisl porttitor in. Donec venenatis dui nec augue vehicula, a gravida ipsum vestibulum. Nulla dignissim, risus quis consectetur semper, sem risus malesuada urna, vitae suscipit enim massa eget nunc. Donec ac velit cursus, euismod risus vitae, dictum ante. Morbi id orci vitae lectus fermentum fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam luctus risus ut tellus efficitur, vitae condimentum massa pellentesque.

Morbi pharetra sed velit ac placerat. Integer auctor magna ut quam suscipit efficitur. Phasellus porttitor eget magna id imperdiet. Quisque pharetra erat eget augue varius commodo. Quisque viverra vehicula neque in malesuada. Phasellus ipsum metus, aliquam vel iaculis eget, blandit at sem. Integer tincidunt tellus sed ex varius mattis. Curabitur arcu odio, posuere quis consequat ut, dignissim vel diam. Integer egestas dolor at facilisis maximus. Vivamus et arcu in nisi egestas volutpat id sit amet augue. Nullam libero ipsum, condimentum et pulvinar et, egestas id purus. Aliquam auctor lacinia risus, in blandit orci luctus in. Vivamus vestibulum egestas erat, vel cursus lacus eleifend ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Nunc vulputate leo volutpat, blandit felis in, tincidunt tellus. Nulla eget leo accumsan, porta tortor at, varius nunc. Phasellus et nisl sed dolor aliquam condimentum. Donec sodales augue nec arcu fermentum cursus. Nam euismod, nisl ut consequat venenatis, nisi risus ullamcorper dolor, eget gravida metus velit eu eros. Nulla sodales malesuada risus. Donec a augue eu orci lobortis fringilla. Integer mattis ante sed finibus tempus. Proin nunc erat, commodo vitae quam sit amet, pretium dapibus nisl. Sed blandit quam ante, sit amet scelerisque ex consectetur id. Proin blandit nunc accumsan, fermentum purus a, pharetra tortor. </p>
        </div>
        <div id="green" backgroundColor={"green"}>
          <h1>Green</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet, ex eget convallis laoreet, nunc massa scelerisque ex, sit amet facilisis est massa eu purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat ex ut dolor cursus viverra. Etiam et nisl sodales, interdum mauris id, venenatis urna. Aliquam dictum mattis tellus, vel pellentesque nisi pretium id. Proin pretium elit sed tempus vestibulum. Ut ultricies congue sapien nec tincidunt. Integer molestie nisi velit, convallis blandit nisl porttitor in. Donec venenatis dui nec augue vehicula, a gravida ipsum vestibulum. Nulla dignissim, risus quis consectetur semper, sem risus malesuada urna, vitae suscipit enim massa eget nunc. Donec ac velit cursus, euismod risus vitae, dictum ante. Morbi id orci vitae lectus fermentum fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam luctus risus ut tellus efficitur, vitae condimentum massa pellentesque.

Morbi pharetra sed velit ac placerat. Integer auctor magna ut quam suscipit efficitur. Phasellus porttitor eget magna id imperdiet. Quisque pharetra erat eget augue varius commodo. Quisque viverra vehicula neque in malesuada. Phasellus ipsum metus, aliquam vel iaculis eget, blandit at sem. Integer tincidunt tellus sed ex varius mattis. Curabitur arcu odio, posuere quis consequat ut, dignissim vel diam. Integer egestas dolor at facilisis maximus. Vivamus et arcu in nisi egestas volutpat id sit amet augue. Nullam libero ipsum, condimentum et pulvinar et, egestas id purus. Aliquam auctor lacinia risus, in blandit orci luctus in. Vivamus vestibulum egestas erat, vel cursus lacus eleifend ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Nunc vulputate leo volutpat, blandit felis in, tincidunt tellus. Nulla eget leo accumsan, porta tortor at, varius nunc. Phasellus et nisl sed dolor aliquam condimentum. Donec sodales augue nec arcu fermentum cursus. Nam euismod, nisl ut consequat venenatis, nisi risus ullamcorper dolor, eget gravida metus velit eu eros. Nulla sodales malesuada risus. Donec a augue eu orci lobortis fringilla. Integer mattis ante sed finibus tempus. Proin nunc erat, commodo vitae quam sit amet, pretium dapibus nisl. Sed blandit quam ante, sit amet scelerisque ex consectetur id. Proin blandit nunc accumsan, fermentum purus a, pharetra tortor. </p>
        </div>
      </ScrollSpy>
    </>
  );
};

export default Demo1;