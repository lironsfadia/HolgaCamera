import React, { PropsWithChildren } from 'react';
import { ScrollView } from 'react-native';
import Markdown from 'react-native-markdown-display';

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView
      className="flex-1 bg-white p-2.5 rounded-lg"
      contentInsetAdjustmentBehavior="automatic"
    >
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const markdownStyles = {
  heading1: {
    fontFamily: 'InterBlack',
    color: '#212020',
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: 'InterBold',
    color: '#404040',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
};

export default MarkdownDisplay;
