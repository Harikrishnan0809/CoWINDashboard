// Write your code here
import './index.css'
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  Bar,
  BarChart,
} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  console.log(data)
  const DataFormatter = number => {
    if (number >= 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number
  }

  return (
    <div>
      <ResponsiveContainer width={1000} height={300}>
        <BarChart data={data} margin={{top: 5}} />
        <XAxis dataKey="vaccine_date" tick={{stroke: 'gray', strokeWidth: 1}} />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: 'gray', strokeWidth: 0}}
        />
        <Legend wrapperStyle={{padding: 30}} />
        <Bar dataKey="dose_1" name="Dose 1" fill="#2d87bb" barSize="15%" />
        <Bar dataKey="dose_2" name="Dose 1" fill="#f54394" barSize="15%" />
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
