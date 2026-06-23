const TypographyTable = ({ tableHeadTitles, tableBodyContent, className = "" }) => {
  return (
    <div className={`my-6 w-full overflow-y-auto ${className}`}>
      <table className="w-188 lg:w-full my-0 mx-auto">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            {tableHeadTitles.map((title) => (
              <th key={title} className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBodyContent.map(({ id, name, episode_count, air_date, overview }) => (
            <tr key={id} className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right">{name}</td>
              <td className="border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right">{episode_count}</td>
              <td className="border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right">{air_date}</td>
              {overview && (
                <td className="border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right max-w-100">{overview}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TypographyTable;
