import Card from '../components/Card/Card';
import SkillBox from '../components/SkillBox/SkillBox';
import InterviewBox from '../components/InterviewBox/InterviewBox';

export default function UIDemo() {
  const low = 1;
  const medium = 2;
  const high = 3;
  return (
    <div>
      <h1>UI Component Demo</h1>
      <Card title="Card Title">
      Very jealous pupper bork fat boi doggo blep smol borking doggo with a long snoot for pats, pats puggorino heckin good boys blep, long bois extremely cuuuuuute shoober dat tungg tho. Very good spot heckin good boys and girls big ol he made many woofs long bois vvv clouds, doge shooberino aqua doggo very taste wow. Doing me a frighten snoot super chub doing me a frighten, ur givin me a spook doing me a frighten. Big ol long bois much ruin diet very good spot big ol pupper long water shoob bork, blop very hand that feed shibe puggorino h*ck. Doggorino such treat length boy pupperino he made many woofs, doggo wow very biscit. mlem. Corgo doggorino long bois what a nice floof heckin angery woofer, wow such tempt h*ck heckin good boys. Super chub thicc ruff yapper lotsa pats long woofer, you are doin me a concern borkf length boy. Porgo ruff you are doin me a concern shooberino adorable doggo heckin angery woofer, adorable doggo doing me a frighten doge snoot, borking doggo stop it fren wow very biscit tungg.
      </Card>
      <hr/>
      <SkillBox label="Next.js" href="http://nextjs.org" confidence={low} />
      <SkillBox label="Redux" href="/skills/redux" confidence={medium} />
      <SkillBox label="React" confidence={high} />
      <hr/>
      <InterviewBox label="Google" href="http://google.com" confidence={low} />
      <InterviewBox label="International Consortium of Coders" confidence={medium} />
      <InterviewBox label="CapitalOne" href="/interviews/capitalone" confidence={high} />

    </div>
  );
}