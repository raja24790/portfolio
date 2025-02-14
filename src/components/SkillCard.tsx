import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

interface SkillCardProps {
  category: string;
  skills: {
    name: string;
    proficiency: number;
    icon?: string;
  }[];
}

const SkillCard = ({ category, skills }: SkillCardProps) => {
  return (
    <Card>
      <h3 className="text-xl font-semibold mb-4">{category}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-dimWhite">{skill.name}</span>
              <span className="text-sm text-dimWhite">{skill.proficiency}%</span>
            </div>
            <motion.div
              className="h-2 bg-gray-700 rounded-full overflow-hidden"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SkillCard; 