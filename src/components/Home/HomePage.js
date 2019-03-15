import React from 'react';
import { SovosPageLayout } from 's1-ui/sovos-global-layout';
// class HomePage extends Component {
//   render() {
//     return (
//       <SovosPageLayout titleElements={ [{ text: 'Home' }] }>
//                 Welcome!!!
//       </SovosPageLayout>
//     );
//   }
// }

const HomePage = () => (
  <SovosPageLayout titleElements={ [{ text: 'Home' }] }>
    Welcome!!!
  </SovosPageLayout>
);

export default HomePage;