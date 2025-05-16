describe('구조 분해 할당(Destructing Assignment)에 관해서', () => {
  it('배열을 분해합니다', () => {
    const array = ['rocket', 'boost', 'im', 'course'];

    const [first, second] = array;
    expect(first).to.eql('rocket');
    expect(second).to.eql('boost');

    const result = [];
    function foo([first, second]) {
      result.push(second);
      result.push(first);
    }

    foo(array);
    expect(result).to.eql(['boost', 'rocket']);
  });

  it('rest/spread 문법을 배열 분해에 적용할 수 있습니다', () => {
    const array = ['rocket', 'boost', 'im', 'course'];
    const [start, ...rest] = array;
    expect(start).to.eql(FILL_ME_IN);
    expect(rest).to.eql(FILL_ME_IN);

    // 다음과 같은 문법은 사용할 수 없습니다. 할당하기 전 왼쪽에는, rest 문법 이후에 쉼표가 올 수 없습니다
    // const [first, ...middle, last] = array
  });

  it('객체의 단축(shorthand) 문법을 익힙니다', () => {
    const name = 'eliceKim';
    const age = 28;

    const person = {
      name,
      age,
      level: 'Junior',
    };
    expect(person).to.eql(FILL_ME_IN);
  });

  it('객체를 분해합니다', () => {
    const student = { name: 'bobLee', major: '물리학과' };

    const { name } = student;
    expect(name).to.eql('bobLee');
  });

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #1', () => {
    const student = { name: 'carolChoi', major: '물리학과' };
    const { name, ...args } = student;

    expect(name).to.eql('carolChoi');
    expect(args).to.eql({ major: '물리학과' });
  });

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #2', () => {
    const student = {
      name: 'carolChoi',
      major: '물리학과',
      lesson: '양자역학',
      grade: 'B+',
    };

    function getSummary({ name, lesson: course, grade }) {
      return `${name}님은 ${grade}의 성적으로 ${course}을 수강했습니다`;
    }

    expect(getSummary(student)).to.eql('carolChoi님은 B+의 성적으로 양자역학을 수강했습니다');
  });

  it('rest/spread 문법을 객체 분해에 적용할 수 있습니다 #3', () => {
    const user = {
      name: 'eliceKim',
      company: {
        name: 'Rocket boost',
        department: 'Development',
        role: {
          name: 'Blockchain Engineer',
        },
      },
      age: 35,
    };

    const changedUser = {
      ...user,
      name: 'bobLee',
      age: 20,
    };

    const overwriteChanges = {
      name: 'bobLee',
      age: 20,
      ...user,
    };

    const changedDepartment = {
      ...user,
      company: {
        ...user.company,
        department: 'Marketing',
      },
    };

    expect(changedUser).to.eql(FILL_ME_IN);

    expect(overwriteChanges).to.eql(FILL_ME_IN);

    expect(changedDepartment).to.eql(FILL_ME_IN);
  });
});
