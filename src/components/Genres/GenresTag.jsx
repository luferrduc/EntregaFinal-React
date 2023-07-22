import { NavLink } from 'react-router-dom'

export const GenresTag = ({ id, name}) => {

  return (
    
    <NavLink key={name} to={`/genre/${id}`}  
    className="text-xs font-bold text-slate-100/50 py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-800/60 text-center align-middle">
      {name}
    </NavLink>
  );
};
