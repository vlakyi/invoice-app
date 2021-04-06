import React from 'react';

declare module '*.svg?inline' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    const content: React.FC;
    export default content;
}