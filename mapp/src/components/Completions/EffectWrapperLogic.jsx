import { useState, useEffect, useRef, cloneElement } from "react";

import PropTypes from "prop-types";

import { useFetchAnimationCheckListQuery } from "../../store";

function EffectWrapperLogic({ query, animation }) {
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const {data, isLoading} = useFetchAnimationCheckListQuery(query);
  const [completed, setCompleted] = useState([]);
  const [newlyCompleted, setNewlyCompleted] = useState("");
  const initialLoad = useRef(true);

  useEffect(() => {
    if (!isLoading && !initialLoad.current) {
      const added = data.filter(item => !completed.includes(item));

      const removed = completed.filter(item => !data.includes(item));

      setCompleted(prev => prev.filter(item => !removed.includes(item)));
      setCompleted(prev => [...prev, ...added]);

      if (added.length > 0) {
        console.log("query: ", query) 
        console.log("completed: ", completed)

        console.log("added: ", added)

        setNewlyCompleted(added[0]);
        setShowCompletionAnimation(true);
        const timeout = setTimeout(() => {
          setShowCompletionAnimation(false);
        }, 5000);
  
        return () => clearTimeout(timeout);
      }
    }
    else if(data !== undefined) {
      initialLoad.current = false;
      setCompleted(data);
    }
  }, [data]);

  return (
    <div>
      { showCompletionAnimation && cloneElement(animation, { file: newlyCompleted}) }
    </div>
  )
}

export default EffectWrapperLogic;

EffectWrapperLogic.propTypes = {
  query: PropTypes.string,
  animation: PropTypes.element.isRequired,
};