declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from 'react-ntative-svg';
    const content: React.FC<SvgProps>;
    export default content;
}