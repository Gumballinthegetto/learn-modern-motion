import PopUpContainer from "@/components/PopUpContainer";
import Practice from "@/components/Practice";

export default function Practice6() {
  return (
    <PopUpContainer>
      <Practice
        title=""
        objective=""
        instructions={[

        ]}
        navLinkType="staggers"
        extraContentBelow={
          <div className="practice-container">

          </div>
        }
      />
    </PopUpContainer>
  );
}