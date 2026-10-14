import Tag from '../../shared/components/Tag';
import type { SkillGroup as SkillGroupData } from '../../shared/data/types';

// One row: group title on the left, its skills as chips on the right.
function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <div className="grid gap-4 py-6 md:grid-cols-4">
      <h3 className="font-semibold">{group.title}</h3>

      <ul className="flex flex-wrap gap-3 md:col-span-3">
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <Tag icon={skill.icon}>
              {skill.name}
              {skill.note && <span className="text-muted">({skill.note})</span>}
            </Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillGroup;
