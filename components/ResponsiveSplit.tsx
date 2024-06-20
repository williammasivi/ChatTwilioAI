import { ReactNode, useEffect } from 'react';
import Split from 'react-split';
import { useWindowSize } from 'react-use';


type ResponsiveSplitProps = {
   children: ReactNode;
}
export default function ResponsiveSplit({ children }: ResponsiveSplitProps) {
   const { width } = useWindowSize();

   useEffect(() => {
      // You can handle any side effects when the window size changes if necessary
   }, [width]);

   return (
      <div className="w-full h-screen">
         {width > 640 ? ( // Adjust the breakpoint as needed
            <Split
               sizes={[25, 75]}
               minSize={0}
               gutterSize={10}
               className="flex"
            >
               <div className="bg-gray-200 p-4">Left Pane</div>
               <div className="bg-gray-300 p-4">Right Pane</div>
            </Split>
         ) : (
            <div className="flex flex-col">
               <div className="bg-gray-200 p-4">
                  {children}
               </div>
            </div>
         )}
      </div>
   );
};