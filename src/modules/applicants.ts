import { Apply } from '../../generated/schema'
export namespace applicants {
  export function getOrCreateApply(accountAddress: string): Apply {
    let applicant = Apply.load(accountAddress)
    if (applicant == null) {
      applicant = new Apply(accountAddress)
    }
    return applicant as Apply
  }
}
