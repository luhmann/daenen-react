import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';

export function buildAndSelectElementByTag(renderString, tagName) {
  const renderedComponent = renderIntoDocument(
    renderString
  );

  return findRenderedDOMComponentWithTag(renderedComponent, tagName);
}

export function buildAndSelectElementByClass(renderString, className) {
  const renderedComponent = renderIntoDocument(
    renderString
  );

  return findRenderedDOMComponentWithClass(renderedComponent, className);
}
