const svg = `
<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.615 1.495L3.865 6.245C3.695 6.415 3.475 6.495 3.245 6.495C3.025 6.495 2.805 6.415 2.635 6.245L0.255 3.875C-0.085 3.525 -0.085 2.975 0.255 2.635C0.595 2.295 1.155 2.295 1.495 2.635L3.245 4.385L7.375 0.255C7.715 -0.085 8.275 -0.085 8.615 0.255C8.955 0.605 8.955 1.155 8.615 1.495Z" fill="#152044"/>
</svg>
`;

const Check = color => {
  return svg.replace(/#152044/g, color);
};

export default Check;
