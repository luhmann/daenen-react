import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';

export function buildAndSelectElementByTag(renderString, tagName) {
  const renderedComponent = renderIntoDocument(
    renderString
  );

  return findRenderedDOMComponentWithTag(renderedComponent, tagName);
}
