import React, { ReactElement, ReactNode } from 'react';
import { shallow } from 'enzyme';

import hasComplexChildren from '../hasComplexChildren';

interface Props {
  children?: ReactNode;
}

describe('hasComplexChildren', () => {
  describe('returns true', () => {
    it('with elements', () => {
      const Test = ({ children }: Props): ReactElement => <div>{children}</div>;

      const wrapper = shallow(
        <Test>
          <span />
          <span />
        </Test>,
      );

      expect(hasComplexChildren(wrapper.getElement())).toBe(true);
    });

    it('with combined types', () => {
      const Test = ({ children }: Props): ReactElement => <div>{children}</div>;

      const wrapper = shallow(
        <Test>
          My test
          <span />
          {1}
        </Test>,
      );

      expect(hasComplexChildren(wrapper.getElement())).toBe(true);
    });

    it('with valid and non valid types', () => {
      const Test = ({ children }: Props): ReactElement => <div>{children}</div>;

      const wrapper = shallow(
        <Test>
          {null}
          My test
          <span />
          {false}
        </Test>,
      );

      expect(hasComplexChildren(wrapper.getElement())).toBe(true);
    });
  });

  describe('returns false', () => {
    it('when empty', () => {
      const Test = ({ children }: Props): ReactElement => <div>{children}</div>;

      const wrapper = shallow(<Test />);

      expect(hasComplexChildren(wrapper.getElement())).toBe(false);
    });

    it('with null', () => {
      const Test = ({ children }: Props): ReactElement => <div>{children}</div>;

      const wrapper = shallow(<Test>{null}</Test>);

      expect(hasComplexChildren(wrapper.getElement())).toBe(false);
    });

    it('with false', () => {
      const Test = ({ children }: Props): ReactElement => <div>{children}</div>;

      const wrapper = shallow(<Test>{null}</Test>);

      expect(hasComplexChildren(wrapper.getElement())).toBe(false);
    });

    it('with text', () => {
      const Test = ({ children }: Props): ReactElement => <div>{children}</div>;

      const wrapper = shallow(<Test>My test</Test>);

      expect(hasComplexChildren(wrapper.getElement())).toBe(false);
    });

    it('with numbers', () => {
      const Test = ({ children }: Props): ReactElement => <div>{children}</div>;

      const wrapper = shallow(<Test>{1}</Test>);

      expect(hasComplexChildren(wrapper.getElement())).toBe(false);
    });

    it('with true', () => {
      const Test = ({ children }: Props): ReactElement => <div>{children}</div>;

      const wrapper = shallow(<Test>{true}</Test>);

      expect(hasComplexChildren(wrapper.getElement())).toBe(false);
    });
  });
});
