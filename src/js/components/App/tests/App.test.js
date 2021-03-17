import { shallow } from 'enzyme';
import { App } from '../App';
import { reportInputMockData } from './EMICalculator.mockData';

describe('Main App COntainer', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  //   test('if EMIReportTable component renders', () => {
  //     expect(wrapper).toBeTruthy();
  //   });

  //   test('if table heading renders properly', () => {
  //     console.log(wrapper.html());
  //     expect(wrapper.find('table th').length).toEqual(6);
  //   });

  //   test('if table data gets populated properly', () => {
  //     console.log(wrapper.html());
  //     expect(wrapper.find('table tr td').at(0)).toEqual(1);
  //   });
});
