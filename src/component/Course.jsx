import React from 'react'

const Course = () => {
  return (
    <>
    <div className=' conatiner_course'>
    <table align="center" border="1" cellpadding="1" cellspacing="1" style={{"width":"734px"}}>
	<thead>
		<tr>
			<th scope="col">slno</th>
			<th scope="col">Course Name</th>
			<th scope="col">Course Eligibility</th>
			<th scope="col" style={{"width":"94px"}}>Duration</th>
			<th scope="col" style={{"width":"83px"}}>Course fee</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1.</td>
			<td>NIELIT 'A' Level(IT)</td>
			<td>स्नातक</td>
			<td style={{"width":"94px"}}>18 माह (1590 घंटे)</td>
			<td style={{"width":"83px"}}>रु. 43000/-</td>
		</tr>
		<tr>
			<td>2.</td>
			<td>NIELIT 'O' Level(IT)</td>
			<td>10+2/ स्नातक</td>
			<td style={{"width":"94px"}}>
			<p>(12 माह / 06 माह)(520 घंटे)</p>
			</td>
			<td style={{"width":"83px"}}>रु. 17500/-</td>
		</tr>
		<tr>
			<td>3.</td>
			<td>Course on Computer Concepts (CCC)</td>
			<td>10th पास</td>
			<td style={{"width":"94px"}}>02 माह (80 घंटे)</td>
			<td style={{"width":"83px"}}>रु.&nbsp;4555/-</td>
		</tr>
		<tr>
			<td>4.</td>
			<td>Basic Computer Course (BCC)&nbsp;</td>
			<td>8th&nbsp; पास</td>
			<td style={{"width":"94px"}}>01 माह (36 घंटे)</td>
			<td style={{"width":"83px"}}>रु. 2336/-</td>
		</tr>
		<tr>
			<td>5.</td>
			<td>
			<p>Industrial Training in “Machine Learning using Python”</p>
			</td>
			<td>10+2 बेसिक कंप्यूटर ज्ञान के साथ/Pursuing Diploma (CS/IT) B.E/B.Tech (CS/IT) / BCA/MCA/B.Sc&nbsp; (IT) एवं समतुल्य&nbsp;</td>
			<td style={{"width":"94px"}}>06 सप्ताह&nbsp;</td>
			<td style={{"width":"83px"}}>रु. 4307/-</td>
		</tr>
		<tr>
			<td>6.</td>
			<td>
			<p>Industrial Training / Internship in “Programming in Python”</p>
			</td>
			<td>10+2&nbsp;बेसिक कंप्यूटर ज्ञान के साथ/Pursuing Diploma (CS/IT) B.E/B.Tech (CS/IT)&nbsp;/&nbsp;BCA/MCA/B.Sc&nbsp; (IT)&nbsp;एवं समतुल्य&nbsp;</td>
			<td style={{"width":"94px"}}>06 सप्ताह&nbsp;</td>
			<td style={{"width":"83px"}}>रु.&nbsp;4307/-</td>
		</tr>
		<tr>
			<td>7.</td>
			<td>Certificate Course in ITES- BPO &amp; Soft Skills</td>
			<td>10th पास</td>
			<td style={{"width":"94px"}}>06 सप्ताह</td>
			<td style={{"width":"83px"}}>&nbsp;रु. 4307/-</td>
		</tr>
		<tr>
			<td>8.</td>
			<td>
			<p>Project Training</p>
			</td>
			<td>Diploma/BCA/MCA/B.Sc (IT)/MSc(IT)/ B.E/B.Tech (CS/IT)</td>
			<td style={{"width":"94px"}}>रु. 1983/- (प्रति माह)</td>
			<td style={{"width":"83px"}}>-</td>
		</tr>
		<tr>
			<td colspan="5" style={{"width":"724px"}}>NOTE: NSQF आधारित पाठ्यक्रमों में SC/ST उम्मीदवारों को पाठ्यक्रम शुल्क से छूट है, किन्तु पंजीकरण एवं परीक्षा शुल्क जमा करनी होगी। (सीट सीमित)</td>
		</tr>
	</tbody>
</table>

    </div>
      
    </>
  )
}

export default Course
